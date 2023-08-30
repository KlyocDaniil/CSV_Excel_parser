import  ExcelWriter  from './ExcelWriter.mjs';
import  FileParser  from './FileParser.mjs';
import  FileSorter  from './FileSorter.mjs';
import  CsvWriter  from './CsvWriter.mjs';
import FileException from './FileException.mjs';

export default class App {

    constructor (taskNumber) {
        this.exception = new FileException();

        if (App.exists) {
            this.exception.instanceError();
            return App.instance;
        }   

        App.instance = this;
        App.exists = true;
        this.taskNumber = taskNumber;
        this.file = new FileParser('./input_data.csv');
    }

    executeOutput(sorter) {
        if (!sorter) {
            // this.exception.checkInstance();
            throw new ValidationError('elwfl')
        }

        switch(this.taskNumber) {
            case 1:
                sorter.filterByNationality('England');
                break;
            case 2:
                sorter.searchWeightBetween(110, 120)
                break;
            case 3:
                sorter.searchBeginningName('Darv');
                break;
            case 4:
                sorter.showSurnameLess(6);
                break;
            case 5:
                sorter.showBmiMember();
                break;
            default:
                throw(new SyntaxError(`Incorrect Task Number: ${this.taskNumber}`));
        }
    }

    run() {
        try {
            let fileSorter = new FileSorter(this.file.parseFile());
            fileSorter = new CsvWriter(fileSorter);
            fileSorter = new ExcelWriter(fileSorter);

            this.executeOutput(fileSorter);
        } catch(err) {
            console.log(err.name + ': ' + err.message + '\n' + err.stack);
        }
    }
}

