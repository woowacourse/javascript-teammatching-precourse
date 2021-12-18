import hasNumber from '../../../utils/hasNumber.js';
import hasSpecialCharacter from '../../../utils/hasSpecialCharacter.js';
import hasWhiteSpace from '../../../utils/hasWhiteSpace.js';

const isValidName = (name) => {
	return (
		!hasNumber(name) &&
		!hasSpecialCharacter(name) &&
		!hasWhiteSpace(name) &&
		name.length >= 1 &&
		name.length <= 5
	);
};

export default isValidName;
