import fs from 'fs'

export default class FileParser {
    
    constructor(pathToFile) {
        this.pathToFile = pathToFile;
    }

    readFile() {
        const file = fs.readFileSync(
            this.pathToFile,
            { encoding: 'utf8' },

            function (err, data) {
                console.log(err || data);
            }
        );

        return file.split('\n');
    }
    
    parseFile() {
        return this.readFile(this.pathToFile).map(elementRow => {
            elementRow = elementRow.replace(/["]/g, '');

            return elementRow.split(',');
        });
    }

    getFirstRow() {
        return this.parseFile().shift();
    }
}
