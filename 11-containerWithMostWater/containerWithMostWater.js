/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
 if (!height.length) return 0;
    
    let left  = 0;
    let right = height.length - 1;
    let maxArea = 0;
    
    while (left < right) {
        maxArea = Math.max(maxArea, Math.min(height[right], height[left]) * (right - left));
        height[left] < height[right] ? left++ : right--;
    }
    return maxArea;
};