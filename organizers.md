---
layout: default
title: Organizers
---

<div class="container">
    <div class="row">
        <div class="col-12">
            <h1 class="text-center mb-5">Workshop Organizers</h1>
            <p class="text-center lead mb-5">Meet the team behind the workshop</p>
        </div>
    </div>

    <div class="row">
        <!-- Organizer 1 -->
        <div class="col-lg-4 mb-4">
            <div class="organizer-card">
                <div class="organizer-image">
                    <img src="{{ '/assets/images/organizer1.jpg' | relative_url }}" alt="Organizer 1" class="img-fluid">
                </div>
                <div class="organizer-content">
                    <h3>Prof. Jane Doe</h3>
                    <p class="organizer-title">Associate Professor</p>
                    <p class="organizer-affiliation">University of Montreal</p>
                    <p class="organizer-bio">
                        Expert in causal inference and recommendation systems. Leading research in fair and interpretable recommendations.
                    </p>
                    <div class="organizer-social">
                        <a href="#" class="me-2"><i class="fab fa-google"></i></a>
                        <a href="#" class="me-2"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Organizer 2 -->
        <div class="col-lg-4 mb-4">
            <div class="organizer-card">
                <div class="organizer-image">
                    <img src="{{ '/assets/images/organizer2.jpg' | relative_url }}" alt="Organizer 2" class="img-fluid">
                </div>
                <div class="organizer-content">
                    <h3>Dr. John Smith</h3>
                    <p class="organizer-title">Research Scientist</p>
                    <p class="organizer-affiliation">McGill University</p>
                    <p class="organizer-bio">
                        Specialist in machine learning and recommendation systems. Focus on causal learning and fairness.
                    </p>
                    <div class="organizer-social">
                        <a href="#" class="me-2"><i class="fab fa-google"></i></a>
                        <a href="#" class="me-2"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Organizer 3 -->
        <div class="col-lg-4 mb-4">
            <div class="organizer-card">
                <div class="organizer-image">
                    <img src="{{ '/assets/images/organizer3.jpg' | relative_url }}" alt="Organizer 3" class="img-fluid">
                </div>
                <div class="organizer-content">
                    <h3>Dr. Sarah Johnson</h3>
                    <p class="organizer-title">Assistant Professor</p>
                    <p class="organizer-affiliation">Concordia University</p>
                    <p class="organizer-bio">
                        Expert in causal inference and its applications in recommendation systems.
                    </p>
                    <div class="organizer-social">
                        <a href="#" class="me-2"><i class="fab fa-google"></i></a>
                        <a href="#" class="me-2"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
.organizer-card {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
    height: 100%;
}

.organizer-card:hover {
    transform: translateY(-10px);
}

.organizer-image {
    position: relative;
    padding-top: 100%;
    overflow: hidden;
}

.organizer-image img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.organizer-card:hover .organizer-image img {
    transform: scale(1.1);
}

.organizer-content {
    padding: 1.5rem;
}

.organizer-content h3 {
    color: var(--primary-color);
    margin-bottom: 0.5rem;
}

.organizer-title {
    color: var(--secondary-color);
    font-weight: 600;
    margin-bottom: 0.25rem;
}

.organizer-affiliation {
    color: var(--text-color);
    font-size: 0.9rem;
    margin-bottom: 1rem;
}

.organizer-bio {
    color: #666;
    font-size: 0.95rem;
    margin-bottom: 1rem;
}

.organizer-social a {
    color: var(--primary-color);
    font-size: 1.2rem;
    transition: color 0.3s ease;
}

.organizer-social a:hover {
    color: var(--secondary-color);
}

@media (max-width: 768px) {
    .organizer-card {
        margin-bottom: 2rem;
    }
}
</style> 