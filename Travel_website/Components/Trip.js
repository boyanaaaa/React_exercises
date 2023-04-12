import './TripStyles.css'
import TripData from './TripData'

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discovour uniqe....</p>
            <div className="tripcard">
                <TripData 
                text="Indonesia, officially the Republic of Indonesia,[b] is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea. Indonesia is the world's largest archipelagic state and the 14th-largest country by area, at 1,904,569 square kilometres (735,358 square miles)."
                image="https://img.freepik.com/premium-photo/pura-ulun-danu-bratan-hindu-temple-with-boat-bratan-lake-landscape-sunrise-bali-indonesia_29505-914.jpg"
                heading="Trip in Indonesia"
                />

                <TripData 
                image="https://www.worldatlas.com/r/w1200/upload/78/22/c3/shutterstock-389471242.jpg"
                heading="Trip in Malaysia"
                text="Malaysia ( is a country in Southeast Asia. The federal constitutional monarchy consists of thirteen states and three federal territories, separated by the South China Sea into two regions: Peninsular Malaysia and Borneo's East Malaysia."
                />

                <TripData 
                image="https://img.theculturetrip.com/wp-content/uploads/2017/12/france-1805936_1920.jpg"
                heading="Trip in France"
                text="France (Officially the French Republic is a country located primarily in Western Europe. It also includes overseas regions and territories in the Americas and the Atlantic, Pacific and Indian Oceans,[XII] giving it one of the largest discontiguous exclusive economic zones in the world."
                />
 
            </div>    
        </div>
    );
}

export default Trip;
