import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFrom } from '../../services/actions/from';
import styles from './recevie.module.css';
import { InputElement } from '../input-element/input-element';
import { links } from '../../utils/constants';

import { filterCathegory } from '../../utils/variables';
import { Fieldset } from '../fieldset/fieldset';
import { Select } from '../select/select';
import { InputContainer } from '../input/input-container';

export const Receive = () => {
    
    const [current, setCurrent] = useState('Все'); 
    const { directions } = useSelector(state => state.directions);
    const dispatch = useDispatch();

    const onChange = e => {
        e.preventDefault();
        dispatch(getFrom(e.currentTarget.value))
    }

    const currentCategory = filterCathegory(current, directions);

    return(
        <InputElement title='Отдаете' current={current}>
            <Fieldset>
                {links.map((link, index) => (
                    <div key={index}>
                        <input value={link.text} type='radio' id={index} name='recevie' onChange={(e) => setCurrent(e.currentTarget.value)} />
                        <label className={current === link.text ? styles.text : undefined} htmlFor={index}>{link.text}</label>
                    </div>
                ))}
            </Fieldset>
            <InputContainer>
                <Select onChange={onChange}>
                    { currentCategory.map(direction => (
                        <option  key={direction.code} value={direction.code}>{direction.name}</option>
                    ))}
                </Select>
            </InputContainer>
        </InputElement>
    );
}