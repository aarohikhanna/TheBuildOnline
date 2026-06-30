# Google Sheets Backend Setup Guide

Store all form submissions (newsletter, sponsor, guest applications) in a Google Sheet for free. Takes ~5 minutes.

## Step 1: Create the Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet
2. Name it **"The Build Story — Submissions"**
3. Create **4 tabs** (click the `+` at the bottom):
   - **Newsletter** — columns: `Timestamp | Email`
   - **Invite Requests** — columns: `Timestamp | Email`
   - **Sponsors** — columns: `Timestamp | Name | Email | Company | Message`
   - **Guest Applications** — columns: `Timestamp | Full Name | Email | LinkedIn | Company | Role | Stage | Story | Topic | Referral`
4. Type these column headers in Row 1 of each tab

## Step 2: Create the Apps Script

1. In your Google Sheet, go to **Extensions → Apps Script**
2. Delete any existing code and paste this:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet();
  const data = JSON.parse(e.postData.contents);
  
  if (data.type === "newsletter") {
    const tab = sheet.getSheetByName("Newsletter");
    tab.appendRow([data.timestamp, data.email]);
  }
  
  else if (data.type === "invite_request") {
    const tab = sheet.getSheetByName("Invite Requests");
    tab.appendRow([data.timestamp, data.email]);
  }
  
  else if (data.type === "sponsor") {
    const tab = sheet.getSheetByName("Sponsors");
    tab.appendRow([data.timestamp, data.name, data.email, data.company, data.message]);
  }
  
  else if (data.type === "guest_application") {
    const tab = sheet.getSheetByName("Guest Applications");
    tab.appendRow([
      data.timestamp,
      data.fullName,
      data.email,
      data.linkedin,
      data.company,
      data.role,
      data.stage,
      data.story,
      data.topic,
      data.referral
    ]);
  }
  
  return ContentService
    .createTextOutput(JSON.stringify({ status: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Click **Save** (Ctrl/Cmd+S)

## Step 3: Deploy as Web App

1. Click **Deploy → New deployment**
2. Click the gear icon → select **Web app**
3. Set:
   - **Description**: "The Build Story form handler"
   - **Execute as**: Me
   - **Who has access**: **Anyone**
4. Click **Deploy**
5. **Authorize** when prompted (click through the "unsafe" warning — it's your own script)
6. **Copy the Web App URL** — it looks like: `https://script.google.com/macros/s/XXXXX/exec`

## Step 4: Connect to Your Site

Open `public/app.js` and find this line near the top of the forms section:

```javascript
const GOOGLE_SHEETS_URL = ""; 
```

Replace it with your URL:

```javascript
const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";
```

## Admin Access

Your Google Sheet IS your admin dashboard:
- Open the Sheet anytime to see all submissions
- Use filters, sorting, and conditional formatting
- Share the Sheet with team members for collaborative access
- Export to CSV/Excel anytime

> TIP: Set up Google Sheets notifications (Tools → Notification settings) to get emailed whenever a new row is added.
