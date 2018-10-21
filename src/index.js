import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Header() {
  return (
    <div className="mt-4 mb-5">
      <h1 className="mb-4">Список сотрудников</h1>
    </div>
  );
}

class ListTable extends React.Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Имя</th>
            <th scope="col">Дожность</th>
            <th scope="col">Пол</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{this.props.emName}</td>
            <td>{this.props.position}</td>
            <td>{this.props.sex}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

class FormSection extends React.Component {
  render() {
    return (
      <form className="mt-5">
        <div className="form-group">
          <label for="name">Имя</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="form-group">
          <label for="position">Дожность</label>
          <select className="form-control" id="position">
            <option value="manager">Менеджер</option>
            <option value="spetialist">Специалист</option>
          </select>
        </div>
        <div className="form-group">
          <label for="sex">Дожность</label>
          <select className="form-control" id="sex">
            <option value="M">Мужской</option>
            <option value="Ж">Женский</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Добавить
        </button>
      </form>
    );
  }
}

class ButtonPanel extends React.Component {
  render() {
    return (
      <div className="buttons">
        <button
          type="button"
          className="btn btn-outline-primary btn-block mb-2"
        >
          Создать
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary btn-block mb-5"
        >
          Редактировать
        </button>
        <button type="button" className="btn btn-light btn-block">
          Удалить
        </button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div className="container">
    <Header />
    <div className="row">
      <div className="col-4">
        <ButtonPanel />
        <FormSection />
      </div>
      <div className="col-8">
        <ListTable emName="Вася" position="Специалист" sex="М" />
      </div>
    </div>
  </div>,
  rootElement
);
