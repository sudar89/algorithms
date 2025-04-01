import 'package:leetcode_dart/src/medium/p15.dart';
import 'package:test/test.dart';

void main() {
  group('p15 3Sum', () {
    test('description', () {
      var solution = Solution();

      expect(solution.threeSum([-1, 0, 1, 2, -1, -4]), [
        [-1, -1, 2],
        [-1, 0, 1],
      ]);
    });
  });
}
