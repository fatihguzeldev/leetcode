--
-- @lc app=leetcode id=182 lang=mysql
--
-- [182] Duplicate Emails
--

-- @lc code=start
# Write your MySQL query statement below

select p.email as Email
from  Person p
group by email
having count(*) > 1;
-- @lc code=end

