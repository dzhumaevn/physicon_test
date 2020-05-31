import React from "react";
import './Filters.css';

const Filters = (props) => {
	return (
		<div className="row mb-5 filters">
			<div className="col-12 col-md-auto mb-3">
				<button type="button"
				        className="btn btn-block"
				        onClick={props.onPriceToggle}
				>Рубли/Бонусы
				</button>
			</div>
			<div className="col-12 col-md-auto flex-fill mb-3">
				<select id="subj"
				        name="subj"
				        className="custom-select"
				        onChange={(e) => props.onFilter({subj: e.target.value})}
				>
					<option value="">Все предметы</option>
					<option>Алгебра</option>
					<option>Английский язык</option>
					<option>Биология</option>
					<option>География</option>
					<option>Геометрия</option>
					<option>Демо-версия</option>
					<option>Информатика</option>
					<option>История</option>
					<option>Литература</option>
					<option>Математика</option>
					<option>Обществознание</option>
					<option>Окружающий мир</option>
					<option>Робототехника</option>
					<option>Русский язык</option>
					<option>Физика</option>
					<option>Химия</option>
				</select>
			</div>

			<div className="col-12 col-md-auto flex-fill mb-3">
				<select id="genre"
				        name="genre"
				        className="custom-select"
				        onChange={(e) => props.onFilter({genre: e.target.value})}
				>
					<option value="">Все жанры</option>
					<option>Демо</option>
					<option>Задачник</option>
					<option>Подготовка к ВПР</option>
					<option>Подготовка к ЕГЭ</option>
					<option>Рабочая тетрадь</option>
				</select>
			</div>

			<div className="col-12 col-md-auto flex-fill mb-3">
				<select id="grade"
				        name="grade"
				        className="custom-select"
				        onChange={(e) => props.onFilter({grade: e.target.value})}
				>
					<option value="">Все классы</option>
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
					<option>6</option>
					<option>7</option>
					<option>8</option>
					<option>9</option>
					<option>10</option>
					<option>11</option>
				</select>
			</div>

			<div className="col-12 col-md-auto flex-fill mb-3">
				<input className="form-control mr-sm-2"
				       type="search"
				       placeholder="Поиск"
				       aria-label="Поиск"
				       onInput={(e) => props.onFilter({searchStr: e.target.value})}/>
			</div>
		</div>
	);
};

export default Filters;
