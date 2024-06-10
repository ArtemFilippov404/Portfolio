'use client';

export default function Contacts() {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Контакты</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Локация</h2>
                        <p>Россия, Самара</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p><a href="tel:+79372083881">+7 (937) 208-38-81</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:ar.filippov404@gmail.com">ar.filippov404@gmail.com</a></p>
                    </li>
                </ul>

            </div>
        </main>
    )
}