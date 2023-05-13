import { assertEquals } from "https://deno.land/std@0.187.0/testing/asserts.ts";
import { moveDown } from "./moveDown.ts";

Deno.test("moveDown", () => {
    assertEquals(
        moveDown({
            x: 10,
            y: 10,
            width: 10,
            height: 10,
            xSpeed: 0,
            ySpeed: 0,
            xAcelleration: 0,
            yAcelleration: 0,
        }),
        {
            x: 10,
            y: 9,
            width: 10,
            height: 10,
            xSpeed: 0,
            ySpeed: 0,
            xAcelleration: 0,
            yAcelleration: 0,
        },
    );
});
