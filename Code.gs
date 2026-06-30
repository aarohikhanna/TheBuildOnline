function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var data = JSON.parse(e.postData.contents);
  
  if (data.type === "newsletter") {
    var tab = sheet.getSheetByName("Newsletter");
    tab.appendRow([data.timestamp, data.email]);
  }
  
  if (data.type === "sponsor") {
    var tab = sheet.getSheetByName("Sponsors");
    tab.appendRow([data.timestamp, data.name, data.email, data.company, data.message]);
  }
  
  if (data.type === "invite_request") {
    var tab = sheet.getSheetByName("Invite Requests");
    tab.appendRow([data.timestamp, data.email]);
  }
  
  if (data.type === "guest_application") {
    var tab = sheet.getSheetByName("Guest Applications");
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
