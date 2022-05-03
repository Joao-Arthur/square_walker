import { range } from '../../range';
import { scenarioParts } from '../scenarioParts';
import { dimensions } from './dimensions';
import { dimensionsAreValid } from './dimensionsAreValid';

function getModel(dimensions: dimensions) {
    if (!dimensionsAreValid(dimensions)) throw Error('Invalid dimensions');
    const rangeWidth = range(dimensions.width);
    const rangeHeight = range(dimensions.height);

    return rangeWidth.map(() => rangeHeight.map(() => scenarioParts.TERRAIN));
}

export const scenarioModel = {
    getModel,
};
