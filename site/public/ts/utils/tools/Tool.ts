import {Input} from "../Input";
import {MouseListener} from "../MouseListener";
import {KeyboardListener} from "../KeyboardListener";

export abstract class Tool implements MouseListener, KeyboardListener {

    /**
     * Checks if this tool should be activated and
     *  then activates it
     *
     * @param  currentTool The tool currently active
     * @param  event       The current event (onclick, keyup, etc.)
     * @param  input       The Input class
     * @param  button      The button/key that was pressed/released
     * @return             True if the tool should be activated
     *                     False otherwise
     */
    public abstract activate(currentTool: Tool, event: string, input: Input, button?: number): boolean;

    /**
     * Checks if this tool should be deactivated
     *
     * @param  event  The current event (onclick, keyup, etc.)
     * @param  input  The Input class
     * @param  button The button/key that was pressed/release
     * @return        True if the tool should be deactivated
     *                False otherwise
     */
    public abstract deactivate(event: string, input: Input, button?: number): boolean;

    public onMouseDown(input: Input, button: number): boolean {
        return false;
    }

    public onMouseMove(input: Input): boolean {
        return false;
    }

    public onMouseDrag(input: Input, button: number): boolean {
        return false;
    }

    public onMouseUp(input: Input, button: number): boolean {
        return false;
    }

    public onClick(input: Input, button: number): boolean {
        return false;
    }

    public onKeyDown(input: Input, key: number): boolean {
        return false;
    }

    public onKeyUp(input: Input, key: number): boolean {
        return false;
    }

}