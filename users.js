var expectedUsers = 1000;

var usersByDay = [817, 1370, 752, 1247, 681, 1120, 915, 1281, 875, 1341, 757, 610, 812, 1170, 769, 1261, 845, 1289, 515, 1247, 845, 1311, 741, 1239, 812, 638, 877, 1242, 1159, 1372];

// Draw chart attendance
keks.plot(usersByDay, expectedUsers);

// Summarize attendance
var totalUsers = 0;
var minUsers = expectedUsers - 100;
for (var i = 0; i <= usersByDay.length - 1; i++) {
  totalUsers += usersByDay[i];
  if (usersByDay[i] < minUsers) {
    console.log (usersByDay[i]) // need to remove
    }
}



// Calculate average attendance посещаемости
var averageUsers = totalUsers / usersByDay.length;
console.log('Средняя посещаемость: ' + averageUsers);

(averageUsers > expectedUsers)
  ? alert('Attendance is great. Keep up the good work!')
  : alert('Attendance is so-so. You need to stretch!');
