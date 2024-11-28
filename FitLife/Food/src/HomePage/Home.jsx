import React from 'react';

// Ensure to adjust the path if needed
const Home = () => {
  return (
    <div style={styles.container}>
      <video autoPlay muted loop style={styles.backgroundVideo}>
        <source src="./Fitness.mp4" type="video/mp4" />
        Your browser does not support this video tag.
      </video>
      <div style={styles.content}>
        <h1 style={styles.heading}>Welcome to your Health & Fitness Hub</h1>

        <section style={styles.section}>
          <h2 style={styles.subHeading}>Track Your Health</h2>
          <p>
            On our platform, you can easily calculate your BMI (Body Mass Index) to
            get a quick overview of your health status based on your weight and
            height.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subHeading}>Manage Your Calorie Intake</h2>
          <p>
            Whether you're looking to gain weight or lose it, we offer tools to
            calculate your calorie surplus or deficit based on your goals. Stay on
            top of your fitness journey with ease!
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subHeading}>Discover Diet Options</h2>
          <p>
            Explore a variety of diet options tailored to your fitness goals. From
            muscle gain to fat loss, we've got the right nutrition plan for you.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subHeading}>Calculate Body Fat Percentage</h2>
          <p>
            Get insights into your body composition by calculating your fat
            percentage. This helps you keep track of your progress beyond just
            weight.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subHeading}>Personalized Fitness Plan</h2>
          <p>
            Our platform also helps you create a personalized fitness and
            nutrition plan based on your current stats and goals.
          </p>
        </section>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative', // Make the container position relative to stack the video and content
    color: 'white',
    maxWidth: '800px',
    margin: '0 auto', // Horizontally center-aligns the container
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center', // Center-aligns text inside the container
  },
  backgroundVideo: {
    position: 'absolute', // Position the video absolutely to cover the container
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Ensures the video covers the container without distortion
    zIndex: -1, // Sends the video behind the content
  },
  content: {
    position: 'relative', // Ensures content is on top of the video
    zIndex: 1, // Makes sure content is above the video
  },
  heading: {
    textAlign: 'center',
    marginTop: '35px',
    fontSize: '36px',
    marginBottom: '20px',
    color: '#000000'
  },
  subHeading: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  section: {
    marginBottom: '30px',
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: 'black',
  },
};

export default Home;
