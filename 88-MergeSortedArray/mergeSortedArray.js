/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = 0;
    for(m; m < nums1.length; m++){
        nums1[m] = nums2[i]
        i++;
    }
    nums1.sort(function(a,b){
        return a - b;
    });
    return nums1;
};