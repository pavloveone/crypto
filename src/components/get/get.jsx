import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './get.module.css';
import { InputElement } from '../input-element/input-element';
import { links } from '../../utils/constants';
import { filterCathegory } from '../../utils/variables';
import { Select } from '../select/select';
import { Fieldset } from '../fieldset/fieldset';
import { InputContainer } from '../input/input-container';

export const Get = () => {

    const [current, setCurrent] = useState(null);

    const { directions } = useSelector(state => state.directions);
    const { filter } = useSelector(state => state.filter);
    const { from } = useSelector(state => state.from);

    const currentTo = filter.map(item => item).find(element => element.from.code === from);

    const currentCategory = filterCathegory(current, directions);
    const currentCategoryTo = !!currentTo && filterCathegory(current, currentTo.to)

    useEffect(() => {
        if(from) {
            setCurrent('Все')
        }
    }, [from])

    return(
        <InputElement title='Получаете' current={current}>
            <Fieldset>
                {links.map((link, index) => (
                    <div key={index}>
                        <input value={link.text} type='radio' id={index+7} name='get' onChange={(e) => setCurrent(e.currentTarget.value)} />
                        <label className={current === link.text ? styles.text : undefined} htmlFor={index+7}>{link.text}</label>
                    </div>
                ))}
            </Fieldset>
            <InputContainer>
                <Select>
                    { !currentTo && currentCategory.map(direction => (
                        <option  key={direction.code} value={direction.code}>{direction.name}</option>
                    ))}
                    { !!currentTo && currentCategoryTo.map(item => (
                        <option  key={item.code} value={item.code}>{item.name}</option>
                    ))}
                </Select>
            </InputContainer>
        </InputElement>
    );
}