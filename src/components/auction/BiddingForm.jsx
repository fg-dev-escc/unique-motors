import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startPuja } from "../../redux/features/auction/thunks";

const MultiploMil = (numero) => numero % 1000 === 0;

export const BiddingForm = () => {
  const dispatch = useDispatch();
  const { subastaTorre } = useSelector(state => state.auctionReducer);
  const { user } = useSelector(state => state.userReducer);
  const [form, setForm] = useState({});
  const [err, setErr] = useState('');
  const [monto, setMonto] = useState('');
    
  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Solo números
    const numValue = parseInt(value) || 0;
    setMonto(value);
    setForm({
      monto: numValue, 
      torreID: subastaTorre?.torreID, 
      usuarioPujaID: user.usuarioID, 
      fecha: new Date()
    });
    setErr('');
  };

  const handleClick = () => {
    if (!MultiploMil(form.monto)) {
      setErr('La oferta debe ser múltiplo de $1,000');
      return;
    }
    if (!form.monto || form.monto <= 0) {
      setErr('La oferta debe ser mayor a 0');
      return;
    }
    dispatch(startPuja(form));
    setErr('');
    setMonto('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <div className="bidding-form">
      <div className="row justify-content-center mb-3">
        <div className="col-md-8">
          <div className="input-group">
            <span className="input-group-text">$</span>
            <input
              type="text"
              className="form-control"
              name="monto"
              value={monto}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              placeholder="Ingresa tu oferta"
            />
            <button 
              className="btn btn-primary"
              onClick={handleClick}
              disabled={!form.monto || form.monto <= 0}
            >
              Ofertar
            </button>
          </div>
        </div>
      </div>
      {err && (
        <div className="text-center text-warning mb-3">
          {err}
        </div>
      )}
    </div>
  );
};

export default BiddingForm;