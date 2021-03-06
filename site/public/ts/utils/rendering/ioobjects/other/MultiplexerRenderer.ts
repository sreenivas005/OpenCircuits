import {DEFAULT_BORDER_WIDTH,
        DEFAULT_BORDER_COLOR,
        DEFAULT_FILL_COLOR,
        SELECTED_BORDER_COLOR,
        SELECTED_FILL_COLOR,
        GATE_NOT_CIRCLE_RADIUS} from "../../../Constants";
import {Vector,V} from "../../../math/Vector";

import {Renderer} from "../../Renderer";
import {Camera} from "../../../Camera";
import {Multiplexer} from "../../../../models/ioobjects/other/Multiplexer";
import {Demultiplexer} from "../../../../models/ioobjects/other/Demultiplexer";

export const MultiplexerRenderer = (function() {

    return {
        render(renderer: Renderer, camera: Camera, mul: Multiplexer | Demultiplexer, selected: boolean) {
            const transform = mul.getTransform();
            const borderCol = (selected ? SELECTED_BORDER_COLOR : DEFAULT_BORDER_COLOR);
            const fillCol   = (selected ? SELECTED_FILL_COLOR   : DEFAULT_FILL_COLOR);

            //
            // Creates the Multiplexer and Demultiplexer the correct size
            //
            if (mul instanceof Multiplexer){
                const p1 = V(-transform.getSize().x/2 , transform.getSize().y/2 + 7);
                const p2 = V(-transform.getSize().x/2 , -transform.getSize().y/2 - 7);
                const p3 = V(transform.getSize().x/2 , -transform.getSize().y/2 + 18);
                const p4 = V(transform.getSize().x/2 , transform.getSize().y/2 - 18);

                renderer.shape([p1, p2, p3, p4], fillCol, borderCol, DEFAULT_BORDER_WIDTH);
            }
            else {
                const p1 = V(transform.getSize().x/2 , transform.getSize().y/2 + 7);
                const p2 = V(transform.getSize().x/2 , -transform.getSize().y/2 - 7);
                const p3 = V(-transform.getSize().x/2, -transform.getSize().y/2 + 18);
                const p4 = V(-transform.getSize().x/2, transform.getSize().y/2 - 18);

                renderer.shape([p1, p2, p3, p4], fillCol, borderCol, DEFAULT_BORDER_WIDTH);
            }
        }
    }
})();
