# write a program to print twinkle twinkle little star poem in python

print("""Twinkle, twinkle, little star,
How I wonder what you are!
Up above the world so high,
Like a diamond in the sky.

When the blazing sun is gone,
When he nothing shines upon,
Then you show your little light,
Twinkle, twinkle, all the night.

Then the traveler in the dark
Thanks you for your tiny spark,
How could he see where to go,
If you did not twinkle so?

In the dark blue sky you keep,
Often through my curtains peep
For you never shut your eye,
Till the sun is in the sky.

As your bright and tiny spark
Lights the traveler in the dark,
Though I know not what you are,
Twinkle, twinkle, little star.""")


# Install an external module and use it to perform an operation of your interest
import pyttsx3
engine = pyttsx3.init()
engine.say("Baptu is a khankir chele")
engine.runAndWait() 


# Write a pythonn program to print the contents of a directory using the os module. Search online for the function which does that.

import os

path = "/"

contents = os.listdir(path)

for item in contents:
    print(item)
