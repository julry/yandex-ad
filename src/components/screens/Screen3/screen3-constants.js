export const ranges = [
    {
        k: 45 / 115,
        minM: 135,
        minS: 205,
        maxM: 250,
        maxS: 250,
        text: 'Что ж, ты точно знаешь себе цену! Такую вакансию на рынке ' +
            'будет трудно найти. Как правило, нужны дополнительные знания в специфических областях.',
        description: 'В Яндекс Рекламе ты можешь получать даже больше — всё зависит от того, ' +
            'насколько ты перевыполнишь план. У нас открыты перспективы для развития карьеры: ' +
            'рост, переходы в другие отделы, работа с разными продуктами. А еще крутой офис, ' +
            'ДМС для супругов и детей и корпоративная ипотечная программа :)'
    },
    {
        k: 55 / 20,
        minM: 115,
        minS: 150,
        maxM: 135,
        maxS: 205,
        text: 'Только 7% работодателей в Екатеринбурге предлагают такие условия. ' +
            'Для того, чтобы получать такой доход, требуется значительный опыт — от 7 лет…',
        description: () => <>
            {'В Яндекс Рекламе всё не так. Если у тебя есть опыт работы ' +
            'с рекламными и аналитическими инструментами Яндекса и опыт продаж в b2b, ' +
            'то смело рассчитывай на 119 000 рублей в месяц ;) Это средний совокупный доход для '}
            <a href={'https://yandex.ru/jobs/pages/manager_direct'}>Менеджера по работе с клиентами</a>
            {' с опытом работы 2-3 года!'}
        </>
    },
    {
        k: 57 / 35,
        minM: 80,
        minS: 93,
        maxM: 115,
        maxS: 150,
        text: 'Совокупный доход от 80 000 до 115 000 руб. специалистам по продажам предлагает только 1/3 работодателей Екатеринбурга.',
        description: ({salary, value}) => (value && value > 113000) || salary > 93000
            ? (
                <>
                    {
                        'А для Яндекс Рекламы — это вполне реальные деньги\nдаже с годом опыта! ' +
                        '93 000 рублей — именно столько в среднем ты сможешь зарабатывать ' +
                        'как '
                    }
                    <a href={'https://yandex.ru/jobs/pages/sales_business'}>
                        Менеджер {'\n'} по продажам рекламы {'\n'} Яндекс Бизнес.
                    </a>
                    {' Наши сотрудники регулярно ' +
                        'перевыполняют план, получая хорошие премии. ' +
                        'А еще у нас есть компенсация питания.'
                    }
                </>
            )
            : (
                <>
                    {'В Яндекс Рекламе 80 000 рублей — это средний совокупный доход '}
                    <a href={'https://yandex.ru/jobs/pages/sales_direct'}>
                        Специалиста по продажам Яндекс Директ
                    </a>
                    {
                        ' при выполнении KPI. А выполняют его более ' +
                        '80% сотрудников. Ещё у нас есть бесплатная страховка ' +
                        'здоровья со стоматологией и оплата 80% ДМС супругов и детей. ' +
                        'Да-да, для тебя откроется множество возможностей :)'
                    }
                </>
            )
    },
    {
        k: 53 / 40,
        minM: 40,
        minS: 40,
        maxM: 80,
        maxS: 93,
        text: 'В Екатеринбурге большинство вакансий предполагает такой уровень совокупного дохода, но...',
        description: 'В Яндекс Рекламе такую сумму можно получать на ' +
            'самом старте карьеры с опытом работы в продажах меньше года. ' +
            'Кстати, у нас можно не только круто зарабатывать — в офисе есть ' +
            'музыкальная комната, библиотека, теннисный стол и фитнес-зал. Смело двигай ползунок вверх!'
    },
];

export const MODAL_TYPES = {
    rules: 'rules',
    form: 'form'
}

export const KEYS_TO_TEXT = {
    93000: '80 тыс.',
    150000: '115 тыс.',
    205000: '135 тыс.',
};

export const KEYS_TO_POSITION = {
    93000: 'right: -4.1em; top: -8px;',
    150000: 'right: -4.5em; top: -8px;',
    205000: 'right: -4.5em; top: -8px;',
};