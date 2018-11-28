function GenerateNumber(table_id) {
  var table, rows, i, j, col;
  var blanket1 = "[";
  table = document.getElementById(table_id);
  rows = table.getElementsByTagName("TR");
  var digits_number = rows.length.toString().length;
  for (i = 0; i < rows.length; i++) {
    col = rows[i].getElementsByTagName("TD")[0];
    var target = i + 1;
    var target_string = target.toString();
    var prefix = "";
    for (j = 0; j < digits_number - target_string.length; j++) {
      prefix = prefix.concat("0");
    }
    col.innerHTML = blanket1.concat(prefix, target_string, "]");
  }
}
function GenerateForBody() {
  GenerateNumber("journal_papers");
  GenerateNumber("confernce_papers");
}