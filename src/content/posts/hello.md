---
title: "How to give and receive code reviews"
date: "2025-02-17"
excerpt: "Best practices on how to give and receive code review for a better experience."
---

Code reviews are a crucial part of the software development process. They help maintain code quality, catch potential bugs early, and foster a collaborative engineering culture. However, code reviews can sometimes be inefficient, frustrating, or even counterproductive if not handled well. In this post, we'll explore best practices for both giving and receiving code reviews to make the process smoother and more effective.


## Giving a Code Review
---
### Be Constructive, Not Critical
Code reviews should be about improving the code, not attacking the person who wrote it. When providing feedback remember to always use a positive and supportive tone. Instead of saying things like "This is wrong", "I don't like this" or "This seems off", try saying "Could we simplify this by doing...?". By focus on improving the code rather than pointing out mistakes, feedback will be received on a more positive note.

### Give Actionable Feedback
Along the lines of being constructive and not critical, it is important to provide actionable feedback. Comments like "This needs to be changed" can be frustrating for developers on the receiving end. Instead, comments like "To improve performance, we can use .some() here so we can end the loop early when we find a match." To improve on this, you could provide an example in your codebase the developer can view. If the change is larger, be sure to explain the benefits such as performance, maintainability or improved readability. And if your codebase has documentation for best practices, be sure to link them so the developer is aware of them and have for future references.

### Be mindful of Scope
Keep the review focused on the purpose of the change. If the code change is in an outdate part of the repository, it can be easy to start making suggestions to improve that area of the code to adhere to latest standards. If you notice unrelated issues, consider suggesting creating an extra ticket that can be tackled in a tech debt sprint. This can help provide visibility to management and then prioritize at the appropriate time. 

### Balance Automated Tools with Human Judgment
Static analysis tools and linters can catch syntax and formatting issues. The focus on reviews should be on logical errors, architectural decisions, performance and scalability issues. Linters and code formatters are a great way to ensure consistency across the codebase. I would recommend having a common configuration for IDEs that can be shared amongst developers. One less thing to worry about during code reviews. And remember, if you have a QA engineer, let them do the manual testing. That is their job and they know what to test and how to test to ensure it meets their standards. Your time should be dedicated to focus on the review.


## Receiving a Code Review 
---
### Don’t Take It Personally
This is a tough one! It can easily feel like you are being attacked or that the person reviewing your code just wants to point out all your mistakes. You could spend hours on making sure your code is perfect and then the reviewer starts adding comments to your code. But just remember that the feedback is about the code, not you. Keep an open mind and see it as a learning opportunity. 

### Ask for clarification when needed
If the feedback is unclear or you are not familiar with the type of change they are suggesting, ask for further clarification. Ask questions instead of just assuming you understand what they are suggesting. Start a discussion to understand the reason behind their suggestion. This will give you a deeper understanding of the change and ability to use in future code changes.

### Write a clear description in the code review
When creating a a code review, be sure to include a summary of what the change does and why it is necessary. Sometimes this can be obvious based on the code change, but sometimes it isn't as obvious to other developers. So it is a good practice to always include a description to provide context.


### Keep code reviews small and focused
There is a common saying in the software world - 
`Give a developer a few lines to code review, they will find 10 things wrong. Give them 100 lines to review, they will approve it right away.`

The smaller the changes, the easier it is to understand what is being changed and why. The larger the change the more difficult it is and more likely something will skip through the cracks. If the code changes are getting large, consider breaking it up into separate code reviews or consider breaking them up into multiple commits in one code review. Separate commits can make it easier to follow the changes and more likely to provide constructive feedback.

---

Overall, effective code reviews help teams build better software while fostering a culture of collaboration and continuous improvement. Whether you’re giving or receiving feedback, approaching the process with clarity, respect, and a willingness to learn makes a significant difference.
