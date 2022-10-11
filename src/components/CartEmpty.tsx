import React from 'react';
import { Link } from 'react-router-dom';

import cartEmptyImg from '../assets/img/empty-cart.png';

export const CartEmpty: React.FC = () => (
  <div className="cart cart--empty">
    <h2>
      Корзина пустая
    </h2>
    <p>
      Вы не заказывали пиццу.
      <br />
      Для заказа перейди на главную страницу.
    </p>
    <Link to="/" className="button button--black">
      <span>Назад</span>
    </Link>
  </div>
);
