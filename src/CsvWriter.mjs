import fs from 'fs';
import FileParser from './FileParser.mjs';

export default class CsvWriter {

    constructor(sorter) {
        this.sorter = sorter;
        this.file = new FileParser('./input_data.csv');
    }

    writeHeadersCSV(path, headersToAdd) {
        const headers = this.file.getFirstRow(); // !!!
        const rowOfHeaders = headers.concat(headersToAdd);
        
        if (headersToAdd === undefined) {
            this.write(path, headers);
        } else {
            this.write(path, rowOfHeaders);
        }

        return rowOfHeaders;
    }
    
    filterByNationality(nationality) {
        const path = './src/outputs/output1TASK.csv'

        this.writeHeadersCSV(path);
    
        const result = this.sorter.filterByNationality(nationality);
        
        this.writeFileOutput(path, result);

        return result;
    }

    searchWeightBetween(min, max){
        const path = './src/outputs/output2TASK.csv';

        this.writeHeadersCSV(path);
        
        const result = this.sorter.searchWeightBetween(min, max);
        
        this.writeFileOutput(path, result);

        return result;
    }

    searchBeginningName(nameMember) {
        const path = './src/outputs/output3TASK.csv';

        this.writeHeadersCSV(path);

        const result = this.sorter.searchBeginningName(nameMember);
        
        this.writeFileOutput(path, result);

        return result;
    }

    showSurnameLess(lengthSurname) {
        const path = './src/outputs/output4TASK.csv';

        this.writeHeadersCSV(path);
        
        const result = this.sorter.showSurnameLess(lengthSurname);
        
        this.writeFileOutput(path, result);

        return result;
    }

    showBmiMember() {
        const path = './src/outputs/output5TASK.csv';

        this.writeHeadersCSV(path, ['BMI'])

        const result = this.sorter.showBmiMember();
        
        this.writeFileOutput(path, result);

        return result;
    }

    write(path, result) {
        fs.writeFileSync(
            path,
            result + '\n',
            { encoding: 'utf8', flag: 'a+' }
        );
    }

    writeFileOutput(pathToOutput, result) {
        this.write(pathToOutput, result.join('\n'));
    }
}
