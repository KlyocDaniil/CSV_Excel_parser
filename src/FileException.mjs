export default class FileException extends Error {

    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }

    checkInstance() {
        throw new SyntaxError('Inctance is already created. Delete new instance.')
    }

    emptyArguments() {
        throw (new SyntaxError('Empty arguments'))
    }
}