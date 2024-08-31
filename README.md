# Video Call Application

This is a video call application made using React and Node.js. It uses sockets for communication and simple-peer which is a WebRTC library that supports audio + video streams. 

You can visit the website at [videocall.sakarbaral.com.np](http://videocall.sakarbaral.com.np).

## Prerequisites

- Node.js (version 17 or later)
- npm (Node Package Manager)
- A modern web browser (Google Chrome, Mozilla Firefox, etc.)


## Installation

### Backend Setup

1. Clone the repository:
   ```
   git clone https://github.com/sakarbaral/video-call-app.git
   cd video-call-app
   ```
2. Install backend dependencies:

    ```npm install```

3. Start the backend server:

    ```node index.js```

### Frontend setup

1. Navigate to the client directory:
    
    ```cd client```

2. Install frontend dependencies:
    
    ```npm install --legacy-peer-deps```

3. Start the development server:

    ```npm run dev```

4. Open your browser and navigate to [localhost:5173](http://localhost:5173)


## Features


- Real-time video and audio streaming using WebRTC.
- Peer-to-peer connection for direct communication.
- Secure and private video calls with no intermediary server - storing video/audio data.
- Simple and intuitive user interface.



## Usage

- Open the application in your browser.
- Enter your name and copy your room id
- Share the room ID with another participant.
- Start the video call and enjoy real-time communication.