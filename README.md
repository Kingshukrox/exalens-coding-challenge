1. Created a for loop to go through the entire array of blocks.
2. created a for loop inside 1st loop to compare each block with every other block.
3. if I was comparing the same block with itself, I skipped the iteration.
4. I then look for what buildings within the blocks the user has asked to be find min distance against by 3 if statements which checks if user wants `gym`,`school` and/or `store`.
5. for whatever selection user wants, I go and calculate the distance between that block in outer loop (i) with all the other blocks in (j) by Math.abs(i-j).
6. I store value of that distance in a variable (gmin,smin,stmin)
7. if I find another block with even shorter distance I store it in the minimum variable (gmin,smin,stmin) or else I skip/dont store.
8. after executing step 7 completely, my minimum variable (gmin,smin,stmin) will only store the minimum distance of that a block (i) with respect to all other blocks
9. I push the sum of minimum distance to all three places in `d` and push it into the array `distance`.
10. this process continues for all the blocks(i) so in the `distance` array I get minimum distance of all blocks to all three places.
11. I find out the index of the min value of the array and that is the index of the block with min distance to the other facilities.