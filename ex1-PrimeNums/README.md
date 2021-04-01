# Display Prime Numbers 1 to 100 Web App

## Intro:

This programme displays all prime numbers between 1 and 100.



## How To Run This App

1. You will need Node to install live server. Do a global install of the live server package. This will allow you to use live server from any command line.

```
npm install -g live-server
```

2. Clone the repro:

```
$ git clone [ past link from repro into here ] 
```

Navigate to the 'start' folder:

```
$ ls [ this will show directory of your folders and files ] 
```

```
$ cd [ type in the name of the folder or file you wish to naviage into i.e. the 'start' folder ]
```

Run live server:

```
$ live-server
```

Once the App has started, you are presented with the application. To display the prime numbers in the console, click the 'Calculate' button. The list of the prime numbers will be displayed in the console. To bring up the console, right-click on UI and select 'inspect', then click the console tab.

### Improvements:

If I had more time, I would display the prime numbers onto the UI rather than the console.

To make this programme more efficent, I can use the square root solution which is to calculate the square root of our
num parameter because the size of the number will that is divided into num will always be less than square root of num. 
Example, 6 is not Prime so:
sqrt 6 = 2.44
The numbers that fit into 6 are 1, 2, 3, 6. 
Because 2 is less than sqrt 6 (2.44), I only need to loop once not 5 times.