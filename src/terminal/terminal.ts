import colors from "colors";
import readline from "readline";

if (process.stdin.isTTY)
    process.stdin.setRawMode(true);
  
readline.emitKeypressEvents(process.stdin);

export class Terminal {
    selected_option: number;

    // Constructor is unneeded.
    constructor() {
        this.selected_option = 0;
    }

    selectMenu (options : Array<string>, finish_function: (selected_text: string) => any) {
        this.selected_option = 0;
        
        let break_process = false;
        
        let render_options = () => {
            for(let i = 0; i < options.length; i++) {
                if(i == this.selected_option) {
                    console.log(colors.inverse(options[i]));
                    continue;
                }
                console.log(options[i]);
            }
        }


        render_options();
        let process_function = (chunk: any, key: any) => {
            if(break_process == true) {
                process.stdin.removeListener("keypress", process_function);
                return;
            };

            switch(key.name) {
                case "up": {
                    if(this.selected_option == 0) {
                        console.clear();
                        render_options();
                        break;
                    }
                    this.selected_option -= 1;
                    console.clear();
                    render_options();
                    break;
                }

                case "down": {
                    if(this.selected_option == options.length - 1) {
                        console.clear();
                        render_options();
                        break;
                    }
                    this.selected_option += 1;
                    console.clear();
                    render_options();
                    break;
                }

                case "return": {
                    break_process = true;
                    finish_function(options[this.selected_option]);
                    return;
                }
            }
        }

        process.stdin.on("keypress", process_function);
    }
    
}

process.on("SIGINT", () => {
    process.exit();
})