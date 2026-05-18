from django.http import JsonResponse


def profile(_request):
    return JsonResponse(
        {
            "name": "Jericho Radam",
            "role": "Full-Stack Developer",
            "location": "Philippines | Open to remote work",
            "email": "jerichradam@gmail.com",
            "github": "https://github.com/Jerichknows?tab=repositories",
            "summary": (
                "I build responsive, maintainable user interfaces with React, Flutter, "
                "Django, AWS, and clean API integrations."
            ),
            "metrics": [
                {"label": "Frontend", "value": "React + Tailwind"},
                {"label": "Backend", "value": "Django APIs"},
                {"label": "Cloud", "value": "AWS-ready"},
            ],
            "strengths": [
                "Built and maintained responsive user interfaces with component-driven development and design system integration.",
                "Implemented state management with Riverpod for Flutter and Redux for React applications.",
                "Integrated frontend applications with GraphQL and REST APIs across production workflows.",
                "Optimized performance, accessibility, and responsive behavior across devices.",
                "Implemented unit, integration, and end-to-end testing for robust software delivery.",
            ],
        }
    )
