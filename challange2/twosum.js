/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    let hash = {}
    let l = nums.length
    for (var i = 0; i < l; i++) {
        let other = hash[target - nums[i]]
        if (other !== undefined) return [other, i]
        hash[nums[i]] = i
    }

};