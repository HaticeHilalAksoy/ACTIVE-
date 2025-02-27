import React from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import Header from "../partials/Header";

 // Header bileşenini ekleyin
//ekledik.
// Stil nesnemizi tanımlıyoruz
const styles = {
    wrapper: {
      width: '420px', // Sabit bir genişlik belirleyelim
      margin: 'auto', // Sayfanın ortasında hizalama için margin: auto kullanın
      marginTop: '150px', // Üstten boşluk vermek için margin-top kullanın
      background: '#3B5B5D', // Tüm sayfa rengini beyaz yap
      border: '2px solid rgba(255,255,255, .1)',
      borderRadius: '10px',
      padding: '30px 40px',
      color: '#fff', // Genel metin rengini belirle (opsiyonel)
    },
    h1: {
      fontSize: '36px',
      textAlign: 'center',
    },
    inputBox: {
      position: 'relative',
      width: '100%',
      height: '50px',
      margin: '30px 0',
    },
    input: {
      width: 'calc(100% - 45px)',
      height: '100%',
      background: 'transparent',
      border: '2px solid rgba(0,0,0, .2)', // Input kenarlık rengini değiştir (opsiyonel)
      borderRadius: '60px',
      fontSize: '16px',
      color: '#fff', // Input yazı rengini değiştir (opsiyonel)
      padding: '20px 20px 20px 45px',
      boxSizing: 'border-box',
      outline: 'none',
    },
    icon: {
      position: 'absolute',
      left: '15px',
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: '20px',
    },
    rememberForgot: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '14.5px',
      margin: '-15px 0 15px',
    },
    btn: {
      width: '100%',
      height: '45px',
      background: '#333',
      border: 'none',
      borderRadius: '40px',
      boxShadow: '0 0 10px rgba(0, 0, 0, .1)',
      cursor: 'pointer',
      fontSize: '16px',
      color: '#fff',
      fontWeight: '600',
      outline: 'none',
    },
    registerLink: {
      fontSize: '14.5px',
      textAlign: 'center',
      margin: '20px 0 15px',
    },
    registerLinkA: {
      color: '#fff', // Link rengini değiştir (opsiyonel)
      textDecoration: 'none', // Çizgiyi kaldır
      fontWeight: '600',
    },
};

const LoginPage = () => {
    return (
      <div>
        <Header /> {/* Header bileşenini ekleyin */}
        <div style={styles.wrapper}>
          <form action="" className="">
            <h1 style={styles.h1}>Login</h1>
            <div style={styles.inputBox}>
              <input type='text' placeholder='Username' required style={styles.input}/>
              <FaUser style={styles.icon}/>
            </div>
            <div style={styles.inputBox}>
              <input type='password' placeholder='Password' required style={styles.input}/>
              <FaLock style={styles.icon} />     
            </div>
            <div style={styles.rememberForgot}>
              <label><input type="checkbox"/>Remember me</label>
              <a href="#" style={styles.registerLinkA}>Forgot password?</a>
            </div>
            <button type="submit" className="btn" style={styles.btn}>Login</button>
            <div className="register-link" style={styles.registerLink}>
              <p>
                Don't have an account? <a href="#" style={styles.registerLinkA}>Sign Up</a>
              </p>
            </div> 
          </form>
        </div>
      </div>
    )
  }
  
  export default LoginPage;