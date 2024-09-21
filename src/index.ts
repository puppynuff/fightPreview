import { bbcf } from "./blazblue_centralfiction/bbcf";
import { Terminal } from "./terminal/terminal";
export const SELECTOR_TERMINAL = new Terminal();
import { GlobalKeyboardListener } from "node-global-key-listener";
import ViGEmClient from "vigemclient";


let client = new ViGEmClient();

// const robot = require("node-key-sender");

// export { robot };

try {
    client.connect();
} catch(err) {
    console.log(err);
}

let controller = client.createX360Controller();

controller.connect();

export { controller };

export function default_run_combo() {
    console.log("No combo is selected!");
}

let run_combo = default_run_combo;

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
            
            case " > Close":  {
                process.exit(0);
            }
        }
    });   
}


const key_listener = new GlobalKeyboardListener();

let running_combo = false;

key_listener.addListener(async function (e, down) {
    if(!e.name) return;

    if(running_combo) return;

    if(e.state == "DOWN" && e.name == "NUMPAD 0") {
        running_combo = true;
        await run_combo();
        running_combo = false;
    }
});

home_menu();

export function change_run_combo(func: () => any) {
    run_combo = func;
}

export function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function reset_controller_buttons() {
    controller.axis.dpadHorz.reset();
    controller.axis.dpadVert.reset();
    controller.button.A.setValue(false);
    controller.button.B.setValue(false);
    controller.button.X.setValue(false);
    controller.button.Y.setValue(false);
}