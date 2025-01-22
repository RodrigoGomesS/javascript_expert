const { error } = require('./src/constants');
const File = require('./src/file');
const assert = require('assert');

//IFFE
; (async () => {
    {
        const filePath = './mocks/emptyFile-invalid.csv';
        const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
        const result = File.csvToJson(filePath);
        await assert.rejects(result, expected);
    }

    {
        const filePath = './mocks/invalid-header.csv';
        const expected = new Error(error.FILE_FIELDS_ERROR_MESSAGE);
        const result = File.csvToJson(filePath);
        await assert.rejects(result, expected);
    }

    {
        const filePath = './mocks/fiveItems-invalid.csv';
        const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
        const result = File.csvToJson(filePath);
        await assert.rejects(result, expected);
    }

    {
        const filePath = './mocks/threeItems-valid.csv';
        const expected = [
            { id: 1, name: 'Aline Camargo', profession: 'Doctor', age: 61 },
            { id: 3, name: 'José Alabama', profession: 'Carpenter', age: 44 },
            { id: 7, name: 'Felipe Santos', profession: 'Developer', age: 33 }
        ];
        const result = await File.csvToJson(filePath);
        await assert.deepEqual(result, expected);
    }
})()