import 'package:leetcode_dart/src/medium/p11.dart';
import 'package:test/test.dart';

void main() {
  test('p11 Container With Most Water', () async {
    var solution = Solution();

    expect(solution.maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
  });
}
