import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { blockType } from "../../scenario/block.ts";
import { isValid } from "./isValid.ts";

Deno.test("isValid", () => {
    assertEquals(
        isValid({ x: 0, y: 0, width: 1, height: 1 }, [[
            blockType.AIR,
        ]]),
        true,
    );
    assertEquals(
        isValid({ x: 1, y: 1, width: 1, height: 1 }, [[
            blockType.AIR,
        ]]),
        false,
    );
    assertEquals(
        isValid({ x: -1, y: -1, width: 0, height: 0 }, [[
            blockType.AIR,
        ]]),
        false,
    );
    assertEquals(
        isValid({ x: -1, y: -1, width: 0, height: 0 }, [[
            blockType.AIR,
        ]]),
        false,
    );
});
