import { useState, useContext } from "react";
import "./Card.css";
import { ShopContext } from "../../app/App";

export default function Card({ imgSource, title, id, price }) {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  const { items, addItems, removeItem } = useContext(ShopContext);

  return (
    <div className="card">
      <div className="card-image-wrapper">
        {loading && !err && <div className="image-placeholder">Loading...</div>}

        {err && (
          <div className="image-placeholder image-error">Image not found</div>
        )}

        <img
          src={imgSource}
          alt={`image of ${title}`}
          className={!loading && !err ? "loaded" : "loading"}
          onLoad={() => setLoading(false)}
          onError={() => {
            setErr(true);
            setLoading(false);
          }}
        />
      </div>

      <h3>{title}</h3>

      <div className="card-footer">
        {price && (
          <span className="card-price">${Number(price).toFixed(2)}</span>
        )}

        {items.has(id) && (
          <>
            <div className="card-btn-wrapper">
              <button className="card-btn" onClick={() => {removeItem(id)}}>
                <span>–</span>
              </button>
            </div>

            <div>{items.get(id)["quantity"]}</div>
          </>
        )}
        <div className="card-btn-wrapper">
          <button
            className="card-btn"
            onClick={() => {
              addItems(imgSource, title, id, price);
            }}
          >
            <span>+</span>
          </button>
        </div>
      </div>
    </div>
  );
}
