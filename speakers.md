---
layout: default
title: Speakers
---

<div class="container">
    <div class="row">
        <div class="col-12">
            <h1 class="text-center mb-5">Invited Speakers</h1>
            <p class="text-center lead mb-5">Meet our distinguished keynote speakers and panelists</p>
        </div>
    </div>

    <div class="row">
        <!-- Keynote Speaker 1 -->
        <div class="col-lg-6 mb-4">
            <div class="speaker-card">
                <div class="speaker-image">
                    <img src="{{ '/assets/images/speaker1.jpg' | relative_url }}" alt="Speaker 1" class="img-fluid">
                </div>
                <div class="speaker-content">
                    <h3>Prof. John Smith</h3>
                    <p class="speaker-title">Professor of Computer Science</p>
                    <p class="speaker-affiliation">Stanford University</p>
                    <p class="speaker-bio">
                        Leading expert in causal inference and recommendation systems. His research focuses on developing novel methods for incorporating causal reasoning into machine learning models.
                    </p>
                    <div class="speaker-social">
                        <a href="#" class="me-2"><i class="fab fa-google"></i></a>
                        <a href="#" class="me-2"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Keynote Speaker 2 -->
        <div class="col-lg-6 mb-4">
            <div class="speaker-card">
                <div class="speaker-image">
                    <img src="{{ '/assets/images/speaker2.jpg' | relative_url }}" alt="Speaker 2" class="img-fluid">
                </div>
                <div class="speaker-content">
                    <h3>Dr. Sarah Johnson</h3>
                    <p class="speaker-title">Senior Research Scientist</p>
                    <p class="speaker-affiliation">Netflix</p>
                    <p class="speaker-bio">
                        Industry expert in recommendation systems with extensive experience in applying causal inference to real-world recommendation problems.
                    </p>
                    <div class="speaker-social">
                        <a href="#" class="me-2"><i class="fab fa-google"></i></a>
                        <a href="#" class="me-2"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Panelist 1 -->
        <div class="col-lg-4 mb-4">
            <div class="speaker-card panelist">
                <div class="speaker-image">
                    <img src="{{ '/assets/images/panelist1.jpg' | relative_url }}" alt="Panelist 1" class="img-fluid">
                </div>
                <div class="speaker-content">
                    <h3>Dr. Michael Chen</h3>
                    <p class="speaker-title">Research Scientist</p>
                    <p class="speaker-affiliation">Amazon</p>
                    <p class="speaker-bio">
                        Expert in fairness and bias in recommendation systems.
                    </p>
                </div>
            </div>
        </div>

        <!-- Panelist 2 -->
        <div class="col-lg-4 mb-4">
            <div class="speaker-card panelist">
                <div class="speaker-image">
                    <img src="{{ '/assets/images/panelist2.jpg' | relative_url }}" alt="Panelist 2" class="img-fluid">
                </div>
                <div class="speaker-content">
                    <h3>Prof. Emily Brown</h3>
                    <p class="speaker-title">Assistant Professor</p>
                    <p class="speaker-affiliation">MIT</p>
                    <p class="speaker-bio">
                        Specialist in interpretable recommendation models.
                    </p>
                </div>
            </div>
        </div>

        <!-- Panelist 3 -->
        <div class="col-lg-4 mb-4">
            <div class="speaker-card panelist">
                <div class="speaker-image">
                    <img src="{{ '/assets/images/panelist3.jpg' | relative_url }}" alt="Panelist 3" class="img-fluid">
                </div>
                <div class="speaker-content">
                    <h3>Dr. David Wilson</h3>
                    <p class="speaker-title">Senior Data Scientist</p>
                    <p class="speaker-affiliation">Spotify</p>
                    <p class="speaker-bio">
                        Expert in causal learning for music recommendations.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
.speaker-card {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
    height: 100%;
}

.speaker-card:hover {
    transform: translateY(-10px);
}

.speaker-image {
    position: relative;
    padding-top: 100%;
    overflow: hidden;
}

.speaker-image img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.speaker-card:hover .speaker-image img {
    transform: scale(1.1);
}

.speaker-content {
    padding: 1.5rem;
}

.speaker-content h3 {
    color: var(--primary-color);
    margin-bottom: 0.5rem;
}

.speaker-title {
    color: var(--secondary-color);
    font-weight: 600;
    margin-bottom: 0.25rem;
}

.speaker-affiliation {
    color: var(--text-color);
    font-size: 0.9rem;
    margin-bottom: 1rem;
}

.speaker-bio {
    color: #666;
    font-size: 0.95rem;
    margin-bottom: 1rem;
}

.speaker-social a {
    color: var(--primary-color);
    font-size: 1.2rem;
    transition: color 0.3s ease;
}

.speaker-social a:hover {
    color: var(--secondary-color);
}

.panelist .speaker-content {
    padding: 1rem;
}

.panelist .speaker-bio {
    margin-bottom: 0;
}

@media (max-width: 768px) {
    .speaker-card {
        margin-bottom: 2rem;
    }
}
</style> 