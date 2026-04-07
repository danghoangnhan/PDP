def nextPermutation(nums):
    """
    :type nums: List[int]
    :rtype: void Do not return anything, modify nums in-place instead.
    """
    n = len(nums)
    i = n - 1
    while i > 0 and nums[i].orderId <= nums[i - 1].orderId:
        i -= 1
    reverse(nums, i, n - 1)
    if i > 0:
        for j in range(i, n):
            if nums[j].orderId > nums[i - 1].orderId:
                swap(nums, i - 1, j)
                break


def reverse(nums, i, j):
    """
    contains i and j.
    """

    for k in range(i, int((i + j) / 2 + 1)):
        swap(nums, k, i + j - k)


def swap(nums, i, j):
    """
    contains i and j.
    """
    nums[i], nums[j] = nums[j], nums[i]
