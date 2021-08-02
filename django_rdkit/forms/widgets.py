from django.forms.widgets import Widget

class MoleculeEditor(Widget):
    template_name = 'django_rdkit/widgets/molecule_editor.html'

    def __init__(self, attrs=None):
        if attrs:
            default_attrs.update(attrs)
        super().__init__(default_attrs)