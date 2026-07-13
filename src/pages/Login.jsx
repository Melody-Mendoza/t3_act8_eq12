import "../styles/Login.css";

function Login() {
  return (
    <div className="login-container">

      <div className="login-card">

        <div className="login-decoration"></div>

        <div className="login-content">

          <div className="logo">
            
          </div>

          <h1>ControlSys</h1>

          <p>Inicia sesión para continuar</p>

          <form>

            <div className="input-group">
              <label>Usuario</label>
              <input
                type="text"
                placeholder="Ingresa tu usuario"
              />
            </div>

            <div className="input-group">
              <label>Contraseña</label>
              <input
                type="password"
                placeholder="Ingresa tu contraseña"
              />
            </div>

            <button type="submit">
              Entrar
            </button>

          </form>

          <a href="#">¿Olvidaste tu contraseña?</a>

        </div>

      </div>

    </div>
  );
}

export default Login;