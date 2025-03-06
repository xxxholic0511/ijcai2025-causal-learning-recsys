---
layout: default
title: Submission
---

<div class="container">
    <div class="row">
        <div class="col-lg-8 mx-auto">
            <h1 class="text-center mb-5">Submission Guidelines</h1>
            
            <div class="card mb-4">
                <div class="card-body">
                    <h2 class="card-title">Important Dates</h2>
                    <div class="timeline-dates">
                        <div class="timeline-date">
                            <i class="fas fa-calendar-alt"></i>
                            <div>
                                <h4>Paper Submission Deadline</h4>
                                <p>April 15, 2025</p>
                            </div>
                        </div>
                        <div class="timeline-date">
                            <i class="fas fa-envelope"></i>
                            <div>
                                <h4>Notification of Acceptance</h4>
                                <p>May 15, 2025</p>
                            </div>
                        </div>
                        <div class="timeline-date">
                            <i class="fas fa-file-alt"></i>
                            <div>
                                <h4>Camera-ready Submission</h4>
                                <p>June 1, 2025</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card mb-4">
                <div class="card-body">
                    <h2 class="card-title">Submission Types</h2>
                    <div class="submission-types">
                        <div class="submission-type">
                            <i class="fas fa-file-alt"></i>
                            <h3>Full Papers</h3>
                            <p>Original research papers (6-8 pages)</p>
                        </div>
                        <div class="submission-type">
                            <i class="fas fa-lightbulb"></i>
                            <h3>Position Papers</h3>
                            <p>Novel ideas and perspectives (4-6 pages)</p>
                        </div>
                        <div class="submission-type">
                            <i class="fas fa-tasks"></i>
                            <h3>Work-in-Progress</h3>
                            <p>Preliminary results (2-4 pages)</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card mb-4">
                <div class="card-body">
                    <h2 class="card-title">Paper Format</h2>
                    <ul class="format-list">
                        <li>Papers must be submitted in PDF format</li>
                        <li>Use the IJCAI 2025 LaTeX style files</li>
                        <li>Include all figures and references in the page limit</li>
                        <li>Papers must be written in English</li>
                    </ul>
                </div>
            </div>

            <div class="card mb-4">
                <div class="card-body">
                    <h2 class="card-title">Topics of Interest</h2>
                    <div class="topics-grid">
                        <div class="topic-item">
                            <i class="fas fa-project-diagram"></i>
                            <h4>Causal Inference</h4>
                        </div>
                        <div class="topic-item">
                            <i class="fas fa-chart-line"></i>
                            <h4>Recommendation Systems</h4>
                        </div>
                        <div class="topic-item">
                            <i class="fas fa-balance-scale"></i>
                            <h4>Fairness & Bias</h4>
                        </div>
                        <div class="topic-item">
                            <i class="fas fa-lightbulb"></i>
                            <h4>Interpretability</h4>
                        </div>
                        <div class="topic-item">
                            <i class="fas fa-shield-alt"></i>
                            <h4>Robustness</h4>
                        </div>
                        <div class="topic-item">
                            <i class="fas fa-code"></i>
                            <h4>Implementation</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <h2 class="card-title">Submission Process</h2>
                    <ol class="submission-steps">
                        <li>Prepare your paper following the format guidelines</li>
                        <li>Submit through the workshop's submission system</li>
                        <li>Papers will be reviewed by at least 3 reviewers</li>
                        <li>Authors will receive detailed feedback</li>
                        <li>Accepted papers will be presented at the workshop</li>
                    </ol>
                    <div class="text-center mt-4">
                        <a href="#" class="btn btn-primary">Submit Your Paper</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
.timeline-dates {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.timeline-date {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.timeline-date i {
    font-size: 2rem;
    color: var(--secondary-color);
}

.timeline-date h4 {
    margin: 0;
    color: var(--primary-color);
}

.timeline-date p {
    margin: 0;
    color: #666;
}

.submission-types {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-top: 1rem;
}

.submission-type {
    text-align: center;
    padding: 1.5rem;
    background: var(--light-gray);
    border-radius: 10px;
    transition: transform 0.3s ease;
}

.submission-type:hover {
    transform: translateY(-5px);
}

.submission-type i {
    font-size: 2rem;
    color: var(--secondary-color);
    margin-bottom: 1rem;
}

.submission-type h3 {
    font-size: 1.2rem;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
}

.format-list {
    list-style: none;
    padding: 0;
}

.format-list li {
    padding: 0.5rem 0;
    padding-left: 2rem;
    position: relative;
}

.format-list li::before {
    content: '•';
    color: var(--secondary-color);
    position: absolute;
    left: 0;
}

.topics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
}

.topic-item {
    text-align: center;
    padding: 1rem;
    background: var(--light-gray);
    border-radius: 10px;
    transition: transform 0.3s ease;
}

.topic-item:hover {
    transform: translateY(-5px);
}

.topic-item i {
    font-size: 1.5rem;
    color: var(--secondary-color);
    margin-bottom: 0.5rem;
}

.topic-item h4 {
    margin: 0;
    font-size: 1rem;
    color: var(--primary-color);
}

.submission-steps {
    padding-left: 1.5rem;
}

.submission-steps li {
    margin-bottom: 1rem;
    color: #666;
}

.submission-steps li:last-child {
    margin-bottom: 0;
}

@media (max-width: 768px) {
    .submission-types {
        grid-template-columns: 1fr;
    }
    
    .topics-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style> 