/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  var start = [],
    end = [],
    room = 0,
    endIndex = 0;

  intervals.forEach(interval => {
    start.push(interval[0]);
    end.push(interval[1]);
  });
  start.sort();
  end.sort();
  //   start.sort((a, b) => a - b);
  //   end.sort((a, b) => a - b);

  for (var i = 0; i < intervals.length; i++) {
    start[i] < end[endIndex] ? room++ : endIndex++;
  }

  return room;
};
console.log(minMeetingRooms([[0, 30], [5, 10], [15, 20]]));
console.log(minMeetingRooms([[0, 30], [5, 10], [9, 20], [9, 17], [8, 17], []]));
console.log(minMeetingRooms([[0, 30]]));
console.log(minMeetingRooms([[0, -1]]));
console.log(minMeetingRooms([[]]));
