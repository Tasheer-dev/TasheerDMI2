const ExcelJS = require('exceljs');
const path = require('path');

const FILE_PATH = path.join(__dirname, 'data.xlsx'); // your Excel file name

async function readExcel() {
  const workbook = new ExcelJS.Workbook();
  try {
    await workbook.xlsx.readFile(FILE_PATH);
    const sheet = workbook.worksheets[0]; // first sheet
    const data = [];

    sheet.eachRow((row) => {
      data.push(row.values.slice(1)); // skip first empty index
    });

    console.clear();
    console.log('📅 Excel data (last updated:', new Date().toLocaleTimeString(), ')');
    console.table(data);
  } catch (error) {
    console.error('❌ Error reading Excel file:', error.message);
  }
}

// Run immediately
readExcel();

// Schedule every 5 minutes (300000 ms)
setInterval(readExcel, 300000);


const fs = require('fs');
fs.watch(FILE_PATH, (eventType) => {
  if (eventType === 'change') {
    console.log('⚡ Excel file changed! Reloading...');
    readExcel();
  }
});
