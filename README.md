# Welcome 

Welcome to my project, this is my first (kinda) big React Project. 

In this project, I used features that I've learned in the BootCamp program and also feauteres by searching online.

This is a fitness website, which may have bad design (both UI and UX but please bear with me <3 ) where you can, "login", search filter and choose exercises.

## Libraries that needed to be Installed:

**react-router-6:**
npm install react-router-dom@6

**Framer-motion:**
npm install framer-motion


# Exercise Page

In the Exercise Panel, each exercise are given in the database are displayed using  ```.map``` method.
![Screenshot](https://github.com/CanSudor95/fitness-website/blob/master/public/ScreenShots/ScreenShot4.PNG?raw=true)

In this exercise panel you can:
- Check details of exercises by clicking on them
- Add and Remove exercises
- Filter exercises by pressing filter buttons or using search bar (```.filter``` method is used)
 >Search bar can be used for filtering by difficulty, name (full name not necessary),and by area of focus.

# Exercise's Page

Each Exercise has its own page and its created by using the line:
```<Route path="/Exercises/:exerciseId" element={<SingleExercise />} />``` .

![Screenshot5](https://github.com/CanSudor95/fitness-website/blob/master/public/ScreenShots/ScreenShot5.png?raw=true)

# My Exercise Page

In "My Exercise" panel, each added exercises can be seen here. But, if there aren't any exercise added, the information displayed in the picture below will be seen.
![Screenshot6](https://github.com/CanSudor95/fitness-website/blob/master/public/ScreenShots/ScreenShot6.png?raw=true)

You can return back to exercise page by clicking the button on the screen.

Once you add any exercise, the information about the exercise will be displayed in the table as shown like in the figıre below
![Screenshot7](https://github.com/CanSudor95/fitness-website/blob/master/public/ScreenShots/ScreenShot7.png?raw=true)

As you can see, conditional rendering method is used, and number of exercises added inside <My Exercise> component decide which line of code to render (first option when 0 exercise, second one for 1 or more)
 
Another important detail is, when an exerice is removed, **_the add display on exericse card is also returned back from remove display_**
  
# Login

In the current state of the project. A dummy login is used (no backend right now).
  
In the login screen the given email address and password is needed to be used for login 
  
![Screenshot7](https://github.com/CanSudor95/fitness-website/blob/master/public/ScreenShots/ScreenShot8.png?raw=true)
  if either email or password is written wrong, an error message will be shown (**_conditional rendering_** method is used).
![Screenshot7](https://github.com/CanSudor95/fitness-website/blob/master/public/ScreenShots/ScreenShot9.png?raw=true) 
 
Once login, the text of **Login** button will be changed to **Log out** and you can "log out" (yes its a dummy login/logout).
 ![Screenshot7](https://github.com/CanSudor95/fitness-website/blob/master/public/ScreenShots/ScreenShot10.png?raw=true) 
 
 
 # Last but not least...
 
 **THANK YOU SO MUCH FOR TAKING YOUR TIME AND READING THIS FILE** 
