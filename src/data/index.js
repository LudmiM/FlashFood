const { readFileSync, writeFileSync }=require('fs');

module.exports={
    readJSON: (file) => {
        return JSON.parse(readFileSync(`./src/data/${file}.json`,'utf-8'));
    },
    writeJSON: (data,file) => {
        writeFileSync(`./src/data/${file}.json`,JSON.stringify(data), 'utf-8')
    }
}