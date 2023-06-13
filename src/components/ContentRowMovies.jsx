import SmallCard from './SmallCard'

const cards = [
    {
        title: 'Productos',
        color: 'primary',
        quantity: 18,
        icon: 'fa-laptop'
    },
    {
        title: 'Usuarios',
        color: 'success',
        quantity: 5,
        icon: 'fa-users'
    },

]

function ContentRowMovies() {
    return (
        <div className="row">
            {cards.map((card, key) =>
                <SmallCard key={key} color={card.color} title={card.title} quantity={card.quantity} icon={card.icon} />
            )}
        </div>
    )
}

export default ContentRowMovies