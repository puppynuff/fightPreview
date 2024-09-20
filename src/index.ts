import { bbcf } from "./blazblue_centralfiction/bbcf";
import { Terminal } from "./terminal/terminal";
export const SELECTOR_TERMINAL = new Terminal();


export function home_menu(base_log = "") {
    console.clear();
    if(base_log != "") {
        console.log(base_log + "\n");
    }
    SELECTOR_TERMINAL.selectMenu([" > Blazblue: Centralfiction", " > Blazblue: Chronophantasma Extend", " > Blazblue Continuum Shift Extend", " > Blazblue Calamity trigger", " > Personal4 Arena Ultimax", " > Close"], (selected_option) => {
        switch(selected_option) {
            case " > Blazblue: Centralfiction": {
                return bbcf();
            }
            
            case " > Blazblue: Chronophantasma Extend": {
                return home_menu("Not developed yet!");
            }
            
            case " > Blazblue Continuum Shift Extend": {
                return home_menu("Not developed yet!");
            }
            
            case " > Blazblue Calamity trigger": {
                return home_menu("Not developed yet!");
            }
            
            case " > Personal4 Arena Ultimax": {
                return home_menu("Not developed yet!");
            }
            
            case " > Close" : process.exit(0);
        }
    });   
}

home_menu();