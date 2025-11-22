import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

// ✅ Load service account credentials
const KEY_FILE_PATH = path.join(process.cwd(), 'sheets-dashboard-bot.json');
const credentials = JSON.parse(fs.readFileSync(KEY_FILE_PATH, 'utf8'));

// ✅ Initialize Google Auth with the credentials
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});

// ✅ Connect to Google Sheets API
const sheets = google.sheets({ version: 'v4', auth });

// ✅ Your Sheet ID and range
const spreadsheetId = '1Er8Uzixv_X5DAGHZrj72MSdXq-5PUlJH0yrOw2KptnI';
const range = 'Sheet1!A1:E10'; // adjust as per your sheet

async function readSheet() {
  try {
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });
    console.log('✅ Successfully fetched sheet data:');
    console.log(res.data.values);
  } catch (error) {
    console.error('❌ Error reading sheet:', error);
  }
}

readSheet();
